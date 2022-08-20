export const formatTime = (time, separator, joiner, count) => {
  if(!time) {
    return time;
  }else {
    return time.split(separator).slice(0, count).join(joiner);
  }
}