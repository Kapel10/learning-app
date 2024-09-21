import { SearchIcon } from '../../shared/icon/Icons.tsx'

const Search = () => {
  return (
    <div className='flex gap-x-3 w-full'>
      <SearchIcon />
      <input
        placeholder='Search...'
        className='outline-none font-light w-full'
      />
    </div>
  )
}

export default Search
