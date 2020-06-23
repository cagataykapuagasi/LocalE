export default {
  login: {
    hello: 'Merhaba!',
    title: 'Uygulamaya giriş yapabilmek için sosyal medya hesaplarınızdan birini bağlayın.',
    buttons: {
      instagram: 'Instagram ile giriş yap',
      twitter: 'Twitter ile giriş yap',
      facebook: 'Facebook ile giriş yap',
    },
  },
  home: {
    empty: 'Etrafında kimse yok.',
  },
  ageGender: {
    title: 'Profilinizi Tamamlayın',
    text: {
      part1: 'Üyelik oluşturmanız için çok az kaldı!',
      part2: 'Aşağıdaki bilgileri girmeniz zorunludur.',
    },
    _gender: 'Cinsiyet',
    date_birth: 'Doğum tarihi',
    women: 'Kadın',
    man: 'Erkek',
    other: 'Diğer',
    button: 'Kaydet',
    errors: {
      lessThen: '13 yaşından küçüklere uygun değildir.',
      biggerThen: '100 yaşından büyüklere uygun değildir.',
      invalid: 'Geçerli bir doğum tarihi girin.',
    },
  },
  friendList: {
    empty: 'Henüz arkadaş yok.',
    searchBar: 'Arkadaşlarını ara',
    count: 'Arkadaş',
    requests: {
      title: 'İstekler',
      header: 'Tanışma İstekleri',
      renderItem: { text: 'Sizinle tanışmak istiyor.', accept: 'Kabul et', decline: 'Reddet' },
      empty: 'Henüz tanışma isteği yok.',
    },
    sendRequests: {
      title: 'Gönderilen İstekler',
      header: 'Tanışma İstekleri',
      renderItem: { result: 'İstek İptal Edildi', cancel: 'İsteği İptal Et' },
      empty: 'Henüz gönderilen istek yok.',
    },
  },
  Notifications: {
    title: 'Bildirimler',
    card: {
      receiveRequest: 'tanışma isteği gönderdi.',
      sendingRequest: 'tanışma isteğinizi',
      sendingRequest2: ' kabul etti.',
    },
    empty: 'Henüz bildirim yok.',
  },
  Profile: {
    buttonText: 'Tanışmak istiyorum',
    hasRequest: 'Tanışma isteği gönderildi',
    age: 'yaşında',
  },
  ProfileSettings: {
    button: 'Kaydet',
    socialsDisable: {
      facebook: 'Facebook ile bağlan',
      instagram: 'Instagram ile bağlan',
      twitter: 'Twitter ile bağlan',
    },
  },
  Popup: {
    userMenu: {
      remove: { title: 'Sil', text: 'arkadaşların arasından çıkarılacak.' },
      block: { title: 'Engelle', text: 'seni göremeyecek ve seninle iletişim kuramayacak.' },
    },
    deleteNotifications: { title: 'Bildirimleri Sil', text: 'Tüm bildirimleriniz silinecek.' },
    picker: { accept: 'Seç', cancel: 'İptal' },
  },
  Alerts: {
    ageGender: 'Bilgileriniz kaydedilirken bir hata oluştu, bağlantınızı kontrol edin.',
    friendList: 'Arkadaş listeniz alınırken bir hata oluştu, bağlantınızı kontrol edin.',
    notifications: {
      fetch: 'Bildirimleriniz alınırken bir hata oluştu, bağlantınızı kontrol edin.',
      deleting: 'Bildirimleriniz silinirken bir hata oluştu, bağlantınızı kontrol edin.',
    },
    profileSettings: 'Hesap değişikliği kaydedilirken bir hata oluştu, bağlantınızı kontrol edin.',
    requests: {
      fetch: 'Arkadaş istekleriniz alınırken bir hata oluştu, bağlantınızı kontrol edin.',
      accept: 'İstek kabul edilirken bir hata oluştu, bağlantınızı kontrol edin.',
      decline: 'İstek reddedilirken bir hata oluştu, bağlantınızı kontrol edin.',
    },
    sentRequests:
      'Gönderilen arkadaş istekleriniz alınırken bir hata oluştu, bağlantınızı kontrol edin.',
    auth: {
      login: 'Giriş yapılırken bir hata oluştu, bağlantınızı kontrol edin.',
      logOut: 'Çıkış yapılırken bir hata oluştu, bağlantınızı kontrol edin.',
    },
    notificationStore: {
      closing: 'Bildirimler kapatılırken bir hata oluştu, bağlantınızı kontrol edin.',
      opening: 'Bildirimler açılırken bir hata oluştu, bağlantınızı kontrol edin.',
      info: 'Bildirim almak için profil bölümünden aktif edebilirsiniz.',
    },
    otherUser: {
      fetch: 'Bilgilere ulaşırken bir hata oluştu, bağlantınızı kontrol edin.',
      request: 'Arkadaş isteği gönderilirken bir hata oluştu, bağlantınızı kontrol edin.',
    },
  },
};
