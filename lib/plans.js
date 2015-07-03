'use strict';
var config = require('./config');
var _ = require('lodash');
var plans = { engageForm: { } };

var efConfig = config.engageForm;

plans.engageForm['engageform-starter'] = _.merge({}, efConfig.defaults, efConfig.starter);

plans.engageForm['engageform-basic'] = _.merge({}, efConfig.defaults, efConfig.basic);
plans.engageForm['engageform-basic-annual'] = _.merge({}, efConfig.defaults, efConfig.basic, { planId: 'engageform-basic-annual', billingTime: 12 });

plans.engageForm['engageform-standard'] = _.merge({}, efConfig.defaults, efConfig.standard);
plans.engageForm['engageform-standard-annual'] = _.merge({}, efConfig.defaults, efConfig.standard, { planId: 'engageform-standard-annual', billingTime: 12 });

plans.engageForm['engageform-pro'] = _.merge({}, efConfig.defaults, efConfig.pro);
plans.engageForm['engageform-pro-annual'] = _.merge({}, efConfig.defaults, efConfig.pro, { planId: 'engageform-pro-annual', billingTime: 12 });

plans.engageForm['engageform-enterprise'] = _.merge({}, efConfig.defaults, efConfig.enterprise);

module.exports = plans;