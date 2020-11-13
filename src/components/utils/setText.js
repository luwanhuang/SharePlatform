const SetSpText = (size)  =>{
    let scaleWidth = SCREEN_WIDTH / 750;  //750是设计稿中的宽度，可根据自己的实际情况调整
    let scaleHeight = SCREEN_HEIGHT / 1334; //1334是设计稿中的高度，可根据自己的实际情况调整
    const pixelRatio = PixelRatio.get();
    const fontScale = PixelRatio.getFontScale();
    let scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
    return size / PixelRatio.get();
}
export default SetSpText;