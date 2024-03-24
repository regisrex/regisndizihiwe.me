function generateRandomColor() {
    const colorHexCodes = ['#0000FF1A', '#87CEEB1A', '#FF00001A', '#FFFF001A', '#0080001A', '#7080901A', '#FFA5001A'];

    const randomIndex = Math.floor(Math.random() * colorHexCodes.length);
    const randomColorName = colorHexCodes[randomIndex];
    return randomColorName
}

export default generateRandomColor