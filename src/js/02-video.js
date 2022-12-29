import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.setCurrentTime(localStorage['videoplayer-current-time']);

player.on(
  'timeupdate',
  _.throttle(function (e) {
    if (e.seconds !== e.duration) {
      localStorage.setItem('videoplayer-current-time', e.seconds);
    } else {
      localStorage.setItem('videoplayer-current-time', 0);
    }
  }, 1500)
);
