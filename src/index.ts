import me from './me'
import pokemon from './pokemon'

const cache = [
  {
    key: 'me',
    title: 'Me',
    data: {
      name: 'Пичугин Данила Кириллович',
      group: 'M3309',
    },
  },
  {
    key: 'pokemon1',
    title: 'First Pokemon',
    data: () => fetch(`https://pokeapi.co/api/v2/pokemon/1/`),
  },
  {
    key: 'pokemon2',
    title: 'Second Pokemon',
    data: () => fetch(`https://pokeapi.co/api/v2/pokemon/2/`),
  },
  {
    key: 'pokemon3',
    title: 'Third Pokemon',
    data: () => fetch(`https://pokeapi.co/api/v2/pokemon/3/`),
  },
  {
    key: 'pokemon4',
    title: 'Fourth Pokemon',
    data: () => fetch(`https://pokeapi.co/api/v2/pokemon/4/`),
  },
  {
    key: 'pokemon5',
    title: 'Fifth Pokemon',
    data: () => fetch(`https://pokeapi.co/api/v2/pokemon/5/`),
  },
  {
    key: 'pokemon6',
    title: 'Sixth Pokemon',
    data: () => fetch(`https://pokeapi.co/api/v2/pokemon/6/`),
  },
  {
    key: 'pokemon7',
    title: 'Seventh Pokemon',
    data: () => fetch(`https://pokeapi.co/api/v2/pokemon/7/`),
  },
]

const root = document.querySelector('#root')
const app = document.createElement('div')

const tabList = document.createElement('ul')
const info = document.createElement('div')

for (let { title, key } of cache) {
  const indexInCacheArray = cache.findIndex((item) => item.key === key)

  const li = document.createElement('li')
  const link = document.createElement('a')
  link.setAttribute('href', '#')
  li.appendChild(link)
  link.innerText = title

  link.addEventListener('click', async () => {
    const { data } = cache[indexInCacheArray]

    // resolve object fetching
    if (typeof data === 'function') {
      cache[indexInCacheArray].data = await (await data()).json()
    }

    const infoRenderer = key === 'me' ? me : pokemon
    infoRenderer(info, cache[indexInCacheArray].data)
  })

  tabList.appendChild(li)
}

app.appendChild(tabList)
app.appendChild(info)
root.appendChild(app)
