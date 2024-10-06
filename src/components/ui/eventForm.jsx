'use client';
import { useState } from 'react';

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
    feedback: '',
  });

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

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Add New Event</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
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

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="feedback">Feedback Section</label>
          <textarea 
            name="feedback" 
            id="feedback" 
            value={event.feedback} 
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Save Event
        </button>

        <div className="mt-4 text-sm text-gray-500">
          <p>By submitting this form, you agree to our terms and conditions.</p>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
