'use client';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Importing the close icon

const EventForm = () => {
  const [event, setEvent] = useState({
    name: '',
    date: '',
    location: '',
    attendees: '',
    description: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    eventType: '',
    multipleAttendees: false,
  });
const [closeForm,setCloseForm] = useState(true)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEvent({
      ...event,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event submitted:', event);
    // Logic to send event data to the server
  };

  const handleClose = () => {
    setCloseForm(false)
    console.log('Form closed');
  };

  return (
    <>
    {closeForm && (
    <div className="container mx-auto px-4 py-6 max-w-lg"> 
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-lg p-6 overflow-y-auto max-h-screen" 
        style={{ maxHeight: '80vh' }} 
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-black">Add New Event</h2>
          <button type="button" onClick={handleClose} className="text-gray-600 hover:text-gray-800">
            <FaTimes size={20} />
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">Event Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={event.name} 
            onChange={handleChange}
            required 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="date">Date and Time</label>
          <input 
            type="datetime-local" 
            name="date" 
            id="date" 
            value={event.date} 
            onChange={handleChange}
            required 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="location">Location</label>
          <input 
            type="text" 
            name="location" 
            id="location" 
            value={event.location} 
            onChange={handleChange}
            required 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="attendees">Expected Number of Attendees</label>
          <input 
            type="number" 
            name="attendees" 
            id="attendees" 
            value={event.attendees} 
            onChange={handleChange}
            required 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">Description</label>
          <textarea 
            name="description" 
            id="description" 
            value={event.description} 
            onChange={handleChange}
            required 
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="contactName">Contact Name</label>
          <input 
            type="text" 
            name="contactName" 
            id="contactName" 
            value={event.contactName} 
            onChange={handleChange}
            required 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="contactEmail">Contact Email</label>
          <input 
            type="email" 
            name="contactEmail" 
            id="contactEmail" 
            value={event.contactEmail} 
            onChange={handleChange}
            required 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="contactPhone">Contact Phone (Optional)</label>
          <input 
            type="tel" 
            name="contactPhone" 
            id="contactPhone" 
            value={event.contactPhone} 
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="eventType">Event Type</label>
          <select 
            name="eventType" 
            id="eventType" 
            value={event.eventType} 
            onChange={handleChange}
            required 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          >
            <option value="">Select Event Type</option>
            <option value="workshop">Workshop</option>
            <option value="seminar">Seminar</option>
            <option value="social">Social Gathering</option>
            <option value="conference">Conference</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="multipleAttendees" 
              checked={event.multipleAttendees} 
              onChange={handleChange}
              className="mr-2" 
            />
            Allow registration for multiple attendees
          </label>
        </div>

        <button 
          type="submit" 
          className="w-full bg-black text-white py-2 rounded-md hover:bg-white hover:text-black transition">
          Save Event
        </button>

        <div className="mt-4 text-sm text-gray-500">
          <p>By submitting this form, you agree to our terms and conditions.</p>
        </div>
      </form>
    </div>
    )}
    </>
  );
};

export default EventForm;
