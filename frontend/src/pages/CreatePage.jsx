import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import api from '../lib/axios';

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("personal");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if(!title.trim() || !content.trim()){
      toast.error("All fields are required");
      return;
    }

    setLoading(true)
    try {
      await api.post("/notes", {
        title,
        content,
        category
      });
      toast.success("Note created successfully");
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);
      if(error.response.status === 429){
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
        });
      } else {
        console.log("Error", error);
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
        <Link to={"/"} className='btn btn-ghost mb-6'>
        <ArrowLeftIcon className='size-5'/>Back to Notes
        </Link>

        <div className='card bg-base-200'>
          <div className='card-body'>
            <h2 className='card-title text-2xl mb-4'>Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Title</span>
                  </label>
                  <input type="text" placeholder="Note Title"
                  className='input input-bordered'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Content</span>
                  </label>
                  <textarea placeholder="Enter your notes here..."
                  className='textarea textarea-bordered h-32'
                  value={content}
                  onChange={(e) => setContent(e.target.value)} />
                </div>
                <div className='form-control mb-4'>
                  <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="text-white px-3 py-2 rounded-lg border border-slate-600 focus:outline-none">
                      <option value="personal">Personal</option>
                      <option value="work">Work</option>
                      <option value="urgent">Urgent</option>
                  </select>
                </div>
                <div className='card-actions justify-end'>
                  <button type='submit' className='btn btn-primary' disabled={loading}>
                    {loading ? "Creating..." : "Create Note" }
                  </button>
                </div>
              </form>
           
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default CreatePage

