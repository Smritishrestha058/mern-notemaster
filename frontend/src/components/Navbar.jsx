import { PlusIcon, FolderOpen, StickyNote, Tag, Siren, Star } from 'lucide-react';
import { Link } from 'react-router';
import React from 'react'

const Navbar = ({ selectedCategory, setSelectedCategory }) => {

  const categories = [
    { value: 'all', label: 'All Notes', icon: StickyNote },
    { value: 'work', label: 'Work', icon: FolderOpen },
    { value: 'personal', label: 'Personal', icon: Tag },
    { value: 'urgent', label: 'Urgent', icon: Siren },
    { value: 'starred', label: 'Starred', icon: Star },
  ];

  return <header className='bg-base-300 border-b border-base-content/10'>
    <div className='mx-auto max-w-6xl w-64 p-4'>
        <div className='flex flex-col items-center justify-between border-b pb-4 gap-5'>
            <h1 className='text-3xl font-bold text-primary font-mono tracking-tightest'>Note Master</h1>
            <div className='flex items-center gap-4'>
                <Link to={"/create"} className='btn btn-primary'>
                <PlusIcon className='size-5' />
                <span>New Note</span>
                </Link>
            </div>
        </div>
        {/* <div className='flex flex-col my-1' >
          <div className='flex items-center gap-4 p-2 text-xl hover:bg-[#657383] rounded-md'>
            <StickyNote className='size-5' />          
            <span>All Notes</span>
          </div>
          <div className='flex items-center gap-4 p-2 text-xl hover:bg-[#657383] rounded-md'>
            <FolderOpen className='size-5' />          
            <span>Work</span>
          </div>
          <div className='flex items-center gap-4 p-2 text-xl hover:bg-[#657383] rounded-md'>
            <Tag className='size-5'/>         
            <span>Personal</span>
          </div>
          <div className='flex items-center gap-4 p-2 text-xl hover:bg-[#657383] rounded-md'>
            <Siren className='size-5' />          
            <span>Urgent</span>
          </div>
          <div className='flex items-center gap-4 p-2 text-xl hover:bg-[#657383] rounded-md'>
            <Star className='size-5' />          
            <span>Starred</span>
          </div>
          
        </div> */}
        <nav className="flex flex-col my-1">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-left ${
                selectedCategory === cat.value ? 'bg-primary text-white' : 'hover:bg-base-200'
              }`}
            >
              <Icon className="size-4" />
              {cat.label}
            </button>
          );
        })}
      </nav>
    </div>
  </header>
}

export default Navbar
