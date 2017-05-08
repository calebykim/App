module.exports.policies = {
  '*': 'flashMessages',

  AdultController: {
    home: 'isAdult',
    show: 'isRequestedAdult',
    edit: 'isRequestedAdult',
    update: 'isRequestedAdult'
  },
  KidController: {
    home: 'isKid',
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
