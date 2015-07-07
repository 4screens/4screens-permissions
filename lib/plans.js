'use strict';
var config = require('./config');
var _ = require('lodash');
var plans = { engageForm: { } };

var efConfig = config.engageForm;

plans.engageForm['engageform-starter'] = _.merge({}, efConfig.defaults, efConfig.starter, { level: 0 });

plans.engageForm['engageform-basic'] = _.merge({}, efConfig.defaults, efConfig.basic, { level: 10 });
plans.engageForm['engageform-basic-annual'] = _.merge({}, efConfig.defaults, efConfig.basic, { planId: 'engageform-basic-annual', billingTime: 12, price: 240, level: 11 });

plans.engageForm['engageform-standard'] = _.merge({}, efConfig.defaults, efConfig.standard, { level: 20 });
plans.engageForm['engageform-standard-annual'] = _.merge({}, efConfig.defaults, efConfig.standard, { planId: 'engageform-standard-annual', billingTime: 12, price: 720, level: 21 });

plans.engageForm['engageform-pro'] = _.merge({}, efConfig.defaults, efConfig.pro, { level: 30 });
plans.engageForm['engageform-pro-annual'] = _.merge({}, efConfig.defaults, efConfig.pro, { planId: 'engageform-pro-annual', billingTime: 12, price: 1680, level: 31 });

plans.engageForm['engageform-enterprise'] = _.merge({}, efConfig.defaults, efConfig.enterprise, { level: 1000000 });

module.exports = plans;