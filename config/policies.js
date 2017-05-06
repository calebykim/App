module.exports.policies = {
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
  TransactionController: {
    new: 'sessionAuth'
    // create: ['hasSufficientFunds', 'isPartOfTransaction'],
    // show: ['isFamilyMember', 'isPartOfTransaction']
  },
  DepositController: {
    '*': 'sessionAuth'
  }
};
