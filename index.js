'use strict';

module.exports = function() {

  var plans = require('./lib/plans.js');
  var module = {
    plans: function() {
      return plans;
    },

    getPlansByAccount: function(account) {
      if(account.toObject) {
        account = account.toObject();
      }
      var result = {};

      var accountPlans = account.settings.subscriptionData.plans || {};
      for (var planType in accountPlans) {
        if (accountPlans.hasOwnProperty(planType) && module.plans()[planType]) {
          result[planType] = module.plans()[planType][accountPlans[planType].planId];
        }
      }

      return result;
    },

    can: function(account, planType, property) {
      return !!module.val(account, planType, property);
    },

    val: function(account, planType, property) {
      if(account.toObject) {
        account = account.toObject();
      }

      if(!account.settings.subscriptionData ||
        !account.settings.subscriptionData.plans ||
        !account.settings.subscriptionData.plans[planType] ||
        !account.settings.subscriptionData.plans[planType].planId ||
        plans[planType][account.settings.subscriptionData.plans[planType].planId] === undefined) {
        return undefined;
      }

      if(account.settings.subscriptionData.plans[planType].isTrial &&
        plans[planType][account.settings.subscriptionData.plans[planType].planId].trialPermissions) {
        if(plans[planType][account.settings.subscriptionData.plans[planType].planId].trialPermissions[property] !== undefined) {
          return plans[planType][account.settings.subscriptionData.plans[planType].planId].trialPermissions[property];
        }
      }
      return plans[planType][account.settings.subscriptionData.plans[planType].planId].permissions[property];
    },

    youengage: {
      can: function(account, property) {
        return module.can(account, 'youengage', property);
      },
      val: function(account, property) {
        return module.val(account, 'youengage', property);
      }
    },

  };
  return module;
};
