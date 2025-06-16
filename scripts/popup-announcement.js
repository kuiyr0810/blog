hexo.extend.filter.register('theme_inject', function (injects) {
  injects.bodyEnd.file('popup-announcement', 'views/popup-announcement.pug', {}, { cache: true });
  injects.style.push('views/popup-announcement.styl');
});