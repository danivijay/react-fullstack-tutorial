
export function movieslist() {
  return {
    type: 'MOVIES_LIST',
    payload: [
      { id: 1, name: 'Madmax : fury road' },
      { id: 2, name: 'Batman vs Superman' },
      { id: 3, name: 'Justice League' }
    ]
  }
}

export function directorslist() {
  return {
    type: 'DIR_LIST',
    payload: [
      { id: 1, name: 'Spillberg' },
      { id: 2, name: 'Nolan' },
      { id: 3, name: 'Camaron' }
    ]
  }
}