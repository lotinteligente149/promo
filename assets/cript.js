function xyski() {
    return !1
}

function xyskis() {
    return !1
}
document.onkeypress = function(i) {
    return i = i || window.event, 123 === i.keyCode ? !1 : void 0
}, document.onmousedown = function(i) {
    return i = i || window.event, 123 === i.keyCode ? !1 : void 0
}, document.onkeydown = function(i) {
    return i = i || window.event, 123 === i.keyCode ? !1 : void 0
}, document.oncontextmenu = xyski;
var isCtrl = !1,
    isAlt = !1,
    isCmd = !1,
    isShift = !1,
    isPrint = !1;
window.onkeyup = function(i) {
    17 === i.which && (isCtrl = !1), (93 === i.which || 91 === i.which || 224 === i.which) && (isCmd = !1)
}, window.onkeydown = function(i) {
    return 17 === i.which && (isCtrl = !0), 85 === i.which && isCtrl === !0 ? !1 : 80 === i.which && isCtrl === !0 ? !1 : 65 === i.which && isCtrl === !0 ? !1 : 88 === i.which && isCtrl === !0 ? !1 : 67 === i.which && isCtrl === !0 ? !1 : 86 === i.which && isCtrl === !0 ? !1 : 83 === i.which && isCtrl === !0 ? !1 : (16 === i.which && (isShift = !0), isCtrl === !0 && isShift === !0 && 73 === i.which ? !1 : ((93 === i.which || 91 === i.which || 224 === i.which) && (isCmd = !0), 85 === i.which && isCmd === !0 ? !1 : 80 === i.which && isCmd === !0 ? !1 : 65 === i.which && isCmd === !0 ? !1 : 88 === i.which && isCmd === !0 ? !1 : 67 === i.which && isCmd === !0 ? !1 : 86 === i.which && isCmd === !0 ? !1 : 83 === i.which && isCmd === !0 ? !1 : (18 === i.which && (isAlt = !0), isCmd === !0 && isAlt === !0 && 73 === i.which ? !1 : isCmd === !0 && isShift === !0 && 51 === i.which ? !1 : isCmd === !0 && isShift === !0 && 52 === i.which ? !1 : isCmd === !0 && isCtrl === !0 && isShift === !0 && 51 === i.which ? !1 : isCmd === !0 && isShift === !0 && 52 === i.which && 32 === i.which ? !1 : void 0)))
}, isCtrl = !1, isCmd = !1, document.ondragstart = xyski;