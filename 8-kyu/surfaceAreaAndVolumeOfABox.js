// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(w, h, d){
    let area = (2 * w * d) + (2 * h * d) + (2 * w * h)
    let volume = w * h * d
      return [area, volume]
    }