import axios from 'axios';
import React, { useEffect, useState } from 'react'


const EntitySection = () => {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const res = await axios.get('/items');
        setItems(res.data);
    };

    const addItem = async () => {
        if (!title) return;
        await axios.post("/items", {title});
        setTitle("");
        fetchItems();
    };
    
    const deleteItem = async (id) => {
        await axios.delete(`/items/${id}`);
        fetchItems();
    };

    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <>
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className='card-title'>Sample Entity</h4>

          {/* Search */}
          <input
          className='form-control mb-3'
          placeholder='Search item...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />

          {/* Add */}
          <div className="input-group mb-3">
            <input
            className='form-control'
            placeholder='New item title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <button className='btn btn-primary' onClick={addItem}>Add</button>
          </div>

          {/* Item List */}
          <ul className="list-group">
            {filteredItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.title}
                <button className='btn btn-danger btn-sm' onClick={() => deleteItem(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
    
  )
}

export default EntitySection;