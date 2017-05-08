module.exports.policies = {
  '*': 'flashMessages',

  AdultController: {
    show: 'isRequestedAdult',
    edit: 'isRequestedAdult',
    update: 'isRequestedAdult'
  },
  KidController: {
    show: 'isRequestedKid',
    edit: 'isRequestedKid',
    update: 'isRequestedKid'
  },
  FamilyController: {
    new: 'isAdult',
    create: 'isAdult',
    show: 'isFamilyMember',
    edit: ['isAdult', 'isFamilyMember'],
    update: ['isAdult', 'isFamilyMember']
  },
  DepositController: {
    '*': 'sessionAuth'
  },
  TransferController: {
    '*': 'sessionAuth'
  }
};
