//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class Series {
  constructor(series) {
    this._series = series.split("")
    this._series.forEach((e, i ,a) => {
      a[i] = Number(e)
    });
    return this
  }

  slices(sliceLength) {
    let seriesLength = this._series.length
    let retArr = []
    switch (true) {
      case (seriesLength < 1): throw new Error('series cannot be empty')
      case (sliceLength < 0): throw new Error('slice length cannot be negative')
      case (sliceLength == 0): throw new Error('slice length cannot be zero')
      case (sliceLength > seriesLength): throw new Error('slice length cannot be greater than series length') 
    }

    for (let i = 0; i < seriesLength; i++) {
      if (sliceLength + i <= seriesLength) {
        retArr.push(this._series.slice(i, i+sliceLength))
      }
    }
    return retArr;
  }
}
