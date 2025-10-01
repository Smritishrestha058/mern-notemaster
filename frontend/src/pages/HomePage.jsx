import React, { useEffect } from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI';
import api from '../lib/axios';
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard';
import NotesNotFound from '../components/NotesNotFound';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
        setFilteredNotes(res.data); // Initialize with all notes
        setIsRateLimited(false);
      } catch (error) {
        if(error.response?.status === 429){
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  // Filter notes when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredNotes(notes);
    } else {
      const filtered = notes.filter(note => note.category === selectedCategory);
      setFilteredNotes(filtered);
    }
  }, [selectedCategory, notes]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='min-h-screen flex flex-row'>
        <Navbar 
          selectedCategory={selectedCategory} 
           setSelectedCategory={setSelectedCategory}
          notes={notes}
        />
        
        {isRateLimited && <RateLimitedUI />}
        
        <div className='flex-1 p-6'>
          

          {/* Loading State */}
          {loading && (
            <div className='text-center text-primary py-10'>
              <span className="loading loading-spinner loading-lg"></span>
              <p className="mt-2">Loading notes...</p>
            </div>
          )}
          
          {/* No Notes State */}
          {!loading && filteredNotes.length === 0 && !isRateLimited && (
            <NotesNotFound 
              message={
                selectedCategory === 'all' 
                  ? "No notes found. Create your first note!" 
                  : `No ${selectedCategory} notes found. Try creating one!`
              }
            />
          )}
          
          {/* Notes Grid - USING filteredNotes CONSISTENTLY */}
          {!loading && filteredNotes.length > 0 && !isRateLimited && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filteredNotes.map((note) =>(
                <div key={note._id}>
                  <NoteCard note={note} setNotes={setNotes}/>
                </div>
              ))}
            </div>
          )}
        </div>
    </div>
  )
}

export default HomePage