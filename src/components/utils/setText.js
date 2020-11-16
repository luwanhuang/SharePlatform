const SetSpText = (size) => {
  let scaleWidth = SCREEN_WIDTH / 750; //
  let scaleHeight = SCREEN_HEIGHT / 1334; //
  const pixelRatio = PixelRatio.get();
  const fontScale = PixelRatio.getFontScale();
  let scale = Math.min(scaleWidth, scaleHeight);
  size = Math.round(((size * scale + 0.5) * pixelRatio) / fontScale);
  return size / PixelRatio.get();
};
export default SetSpText;
