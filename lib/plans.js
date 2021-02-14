'use strict';
var config = require('./config');
var _ = require('lodash');
var plans = { youengage: { } };


var yConfig = config.youengage;

plans.youengage.youengage_free = _.merge({}, yConfig.defaults, yConfig.free, { planId: 'youengage_free', level: 0 });
plans.youengage.youengage_free_trial = _.merge({}, yConfig.defaults, yConfig.free_trial, { planId: 'youengage_free_trial', level: 0 });
plans.youengage.youengage_starter = _.merge({}, yConfig.defaults, yConfig.starter, { planId: 'youengage_starter',level: 10 });
plans.youengage.youengage_professional = _.merge({}, yConfig.defaults, yConfig.professional, { planId: 'youengage_professional',level: 20 });
plans.youengage.youengage_business = _.merge({}, yConfig.defaults, yConfig.business, { planId: 'youengage_business',level: 30 });
plans.youengage.youengage_enterprise = _.merge({}, yConfig.defaults, yConfig.enterprise, { planId: 'youengage_enterprise',level: 40 });

plans.youengage.youengage_starter_annual = _.merge({}, yConfig.defaults, yConfig.starter, { planId: 'youengage_starter_annual',billingTime: 12, price: 228, level: 11 });
plans.youengage.youengage_professional_annual = _.merge({}, yConfig.defaults, yConfig.professional, { planId: 'youengage_professional_annual',billingTime: 12, price: 588, level: 21 });
plans.youengage.youengage_business_annual = _.merge({}, yConfig.defaults, yConfig.business, { planId: 'youengage_business_annual',billingTime: 12, price: 1788, level: 31 });

module.exports = plans;
