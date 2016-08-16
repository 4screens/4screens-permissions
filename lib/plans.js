'use strict';
var config = require('./config');
var _ = require('lodash');
var plans = { engageForm: { }, engageNow: { }, engageHub: { }};


var efConfig = config.engageForm;
var enConfig = config.engageNow;
var ehConfig = config.engageHub;

/* ENGAGE FORMS Plans */
plans.engageForm['engageform-starter'] = _.merge({}, efConfig.defaults, efConfig.starter, { level: 0 });

plans.engageForm['engageform-basic'] = _.merge({}, efConfig.defaults, efConfig.basic, { level: 10 });
plans.engageForm['engageform-basic-annual'] = _.merge({}, efConfig.defaults, efConfig.basic, { planId: 'engageform-basic-annual', billingTime: 12, price: 240, level: 11 });

plans.engageForm['engageform-standard'] = _.merge({}, efConfig.defaults, efConfig.standard, { level: 20 });
plans.engageForm['engageform-standard-annual'] = _.merge({}, efConfig.defaults, efConfig.standard, { planId: 'engageform-standard-annual', billingTime: 12, price: 720, level: 21 });

plans.engageForm['engageform-pro'] = _.merge({}, efConfig.defaults, efConfig.pro, { level: 30 });
plans.engageForm['engageform-pro-annual'] = _.merge({}, efConfig.defaults, efConfig.pro, { planId: 'engageform-pro-annual', billingTime: 12, price: 1680, level: 31 });

plans.engageForm['engageform-enterprise'] = _.merge({}, efConfig.defaults, efConfig.enterprise, { level: 1000000 });


/* ENGAGE NOW Plans */
plans.engageNow['engagenow-starter'] = _.merge({}, enConfig.defaults, enConfig.starter, { level: 0 });

plans.engageNow['engagenow-basic'] = _.merge({}, enConfig.defaults, enConfig.basic, { level: 10 });
plans.engageNow['engagenow-basic-annual'] = _.merge({}, enConfig.defaults, enConfig.basic, { planId: 'engagenow-basic-annual', level: 11, price: 1200, billingTime: 12 });

plans.engageNow['engagenow-standard'] = _.merge({}, enConfig.defaults, enConfig.standard, { level: 20 });
plans.engageNow['engagenow-standard-annual'] = _.merge({}, enConfig.defaults, enConfig.standard, { planId: 'engagenow-standard-annual', level: 21, price: 2400, billingTime: 12 });

plans.engageNow['engagenow-pro'] = _.merge({}, enConfig.defaults, enConfig.pro, { level: 30 });
plans.engageNow['engagenow-pro-annual'] = _.merge({}, enConfig.defaults, enConfig.pro, { planId: 'engagenow-pro-annual', level: 31, price: 4800, billingTime: 12 });

plans.engageNow['engagenow-enterprise'] = _.merge({}, enConfig.defaults, enConfig.enterprise, { level: 1000000 });


/* ENGAGE HUB Plans */
plans.engageHub['engagehub-starter'] = _.merge({}, ehConfig.defaults, ehConfig.starter, { level: 0 });

plans.engageHub['engagehub-basic'] = _.merge({}, ehConfig.defaults, ehConfig.basic, { level: 10 });
plans.engageHub['engagehub-basic-annual'] = _.merge({}, ehConfig.defaults, ehConfig.basic, { planId: 'engagehub-basic-annual', level: 11, price: 480, billingTime: 12 });

plans.engageHub['engagehub-standard'] = _.merge({}, ehConfig.defaults, ehConfig.standard, { level: 20 });
plans.engageHub['engagehub-standard-annual'] = _.merge({}, ehConfig.defaults, ehConfig.standard, { planId: 'engagehub-standard-annual', level: 21, price: 1200, billingTime: 12 });

plans.engageHub['engagehub-pro'] = _.merge({}, ehConfig.defaults, ehConfig.pro, { level: 30 });
plans.engageHub['engagehub-pro-annual'] = _.merge({}, ehConfig.defaults, ehConfig.pro, { planId: 'engagehub-pro-annual', level: 31, price: 2400, billingTime: 12 });

plans.engageHub['engagehub-enterprise'] = _.merge({}, ehConfig.defaults, ehConfig.enterprise, { level: 1000000 });

module.exports = plans;
