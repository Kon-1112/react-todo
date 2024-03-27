
type Props = {
  openAddModal: boolean;
  setOpenAddModal: (open: boolean) => void;
}

const Header = (props: Props) => {
  return (
    <header className='w-full flex justify-between items-center bg-gray-600 p-2'>
      <h1 className='text-white font-bold'>
        TODOアプリ
      </h1>
      <nav>
        <ul className='flex space-x-2.5 mx-2'>
          <li>
            <button className='bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded-md transition-colors duration-200'>
              一覧
            </button>
          </li>
          <li>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded-md transition-colors duration-200'
              onClick={() => props.setOpenAddModal(true)}
            >
              追加
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
