
export function movielist() {
  return {
    type: 'MOVIES_LIST',
    payload: [
      { id: 1, name: 'Madmax : fury road' },
      { id: 2, name: 'Batman vs Superman' },
      { id: 3, name: 'Justice League' }
    ]
  }
}