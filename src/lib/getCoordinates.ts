export default (dropdownRef: DOMRect, content: HTMLDivElement, windowWidth: number) => {
    const dropdownRect = dropdownRef
    const spaceAbove = dropdownRect.top
    const spaceRight = windowWidth - dropdownRect.right

    let newTop
    let newLeft

    if (spaceAbove <= content.clientHeight + 10) {
        newTop = 46
    } else {
        newTop = -4 - content.clientHeight
    }

    if (spaceRight >= 260) {
        newLeft = 0
    } else {
        newLeft = -220
    }

    return {
        top: newTop,
        left: newLeft
    }
}
