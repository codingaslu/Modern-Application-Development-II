// fetch('https://reqres.in/api/users/1', { method: 'GET' })
//   .then((data) => {
//     if (data.ok) {
//       return data.json()
//     } else {
//       throw new Error('Something Went wrong!')
//     }
//   })
//   .then((data) => {
//     console.log(data.data)
//   })
//   .catch((err) => {
//     console.log(err.message)
//   })

fetch('https://reqres.in/api/users', {
  method: 'POST',
  body: JSON.stringify({ first_name: 'Narendra' }),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    console.log(data)
  })

fetch('https://reqres.in/api/users/1', {
  method: 'DELETE',
}).then((res) => {
  console.log(res.status)
})

// async function customfetch() {
//   const res = await fetch('https://reqraes.in/api/users/100').catch(() => {
//     throw new Error('Network Error')
//   })
//   if (res.ok) {
//     const data = await res.json()
//     return data
//   } else {
//     throw new Error('Some error ')
//   }
// }

// customfetch()
//   .then((data) => {
//     console.log(data.data)
//   })
//   .catch((err) => {
//     console.log(err.message)
//   })
