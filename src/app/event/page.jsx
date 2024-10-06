'use client';
import { useState } from 'react';
import EventForm from '@/components/ui/eventForm';

const EventLandingPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Community Cleanup Day',
      date: '2024-10-15T10:00:00',
      location: 'Central Park',
      description: 'Join us for a day of cleaning up our local park. Supplies will be provided.',
    },
    {
      id: 2,
      name: 'Guest Speaker: Tech Innovations',
      date: '2024-10-22T14:00:00',
      location: 'Auditorium A',
      description: 'A talk on the latest in technology by industry leaders.',
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddEvent = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleEventSubmit = (newEvent) => {
    const newId = events.length + 1; // Generate a new ID
    setEvents((prevEvents) => [
      ...prevEvents,
      { id: newId, ...newEvent },
    ]);
    handleCloseForm();
  };

  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold text-black">Upcoming Events</h1>
        <button onClick={handleAddEvent} className="bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black">
          Add Event  
        </button>
      </header>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <div key={event.id} className="border border-gray-600 p-4 rounded-lg shadow">
            <h2 className="font-semibold text-lg">{event.name}</h2>
            <p className="text-sm text-gray-500">{new Date(event.date).toLocaleString()}</p>
            <p className="text-sm text-gray-600">{event.location}</p>
            <p className="mt-2 text-sm">{event.description}</p>
            <button className="mt-4 bg-black text-white py-1 px-2 rounded">More Info...</button>
          </div>
        ))}
      </section>

      {/* Add Event Form */}
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <EventForm onSubmit={handleEventSubmit} onClose={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default EventLandingPage;
