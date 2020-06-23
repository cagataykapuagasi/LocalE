export default {
  login: {
    hello: 'Hello!',
    title: 'Login with one of the social media accounts to login.',
    buttons: {
      instagram: 'Login with Instagram',
      twitter: 'Login with Twitter',
      facebook: 'Login with Facebook',
    },
  },
  home: {
    empty: 'Nobody around you.',
  },
  ageGender: {
    title: 'Complete Your Profile',
    text: {
      part1: 'There is little left to create a membership!',
      part2: 'It is mandatory to enter the information below.',
    },
    _gender: 'Gender',
    date_birth: 'Date of Birth',
    women: 'Women',
    man: 'Man',
    other: 'Other',
    button: 'Save',
    errors: {
      lessThen: 'Not suitable for under 13s.',
      biggerThen: 'Not suitable for people over 100 years old.',
      invalid: 'Enter a valid date of birth.',
    },
  },
  friendList: {
    empty: 'No friends yet.',
    searchBar: 'Seach for friends',
    count: 'Friends',
    requests: {
      title: 'Requests',
      header: 'Friend Requests',
      renderItem: { text: 'Wants to meet you', accept: 'Accept', decline: 'Decline' },
      empty: 'No requests to friend yet.',
    },
    sendRequests: {
      title: 'Send Requests',
      renderItem: { result: 'Request canceled', cancel: 'Cancel request' },
      empty: 'No requests have been submitted yet.',
    },
  },
  Notifications: {
    title: 'Notifications',
    card: {
      receiveRequest: 'sent a friend request.',
      sendingRequest: 'accepted',
      sendingRequest2: ' your friend request.',
    },
    empty: 'No notifications yet.',
  },
  Profile: {
    buttonText: 'I want to meet',
    hasRequest: 'The request was sent',
    age: 'years old',
  },
  ProfileSettings: {
    button: 'Save',
    socialsDisable: {
      facebook: 'Connect with Facebook',
      instagram: 'Connect with Instagram',
      twitter: 'Connect with Twitter',
    },
  },
  Popup: {
    userMenu: {
      remove: { title: 'Remove', text: 'will be removed from your friends.' },
      block: { title: 'Block', text: 'will not see you and cannot contact with you.' },
    },
    deleteNotifications: {
      title: 'Delete Notifications',
      text: 'Notifications will be deleted.',
    },
    picker: { accept: 'Confirm', cancel: 'Cancel' },
  },
  Alerts: {
    ageGender: 'There was an error saving your information, check your connection.',
    friendList: 'There was an error getting your friends list, check your connection.',
    notifications: {
      fetch: 'There was an error getting your notifications, check your connection.',
      deleting: 'There was an error deleting your notifications, check your connection.',
    },
    profileSettings: 'There was an error changing the account, check your connection.',
    requests: {
      fetch: 'There was an error getting your friend requests, check your connection.',
      accept: 'An error occurred while accepting the request, check your connection.',
      decline: 'An error occurred while rejecting the request, check your connection.',
    },
    sentRequests: 'There was an error getting your sent friend requests, check your connection.',
    auth: {
      login: 'There was an error logging in, check your connection.',
      logOut: 'There was an error logging out, check your connection.',
    },
    notificationStore: {
      closing: 'There was an error turning off notifications, check your connection.',
      opening: 'There was an error turning on notifications, check your connection.',
      info: 'You can activate it from the profile section to receive notifications.',
    },
    otherUser: {
      fetch: 'There was an error getting the information, check your connection.',
      request: 'There was an error sending the friend request, check your connection.',
    },
  },
};
