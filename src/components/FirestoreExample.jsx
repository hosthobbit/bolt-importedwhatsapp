import React, { useState } from 'react';
import { 
  createDocument, 
  getDocument, 
  updateDocument, 
  deleteDocument, 
  queryDocuments 
} from '../utils/firestore';

export default function FirestoreExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreate = async () => {
    setLoading(true);
    setError(null);
    try {
      const newData = {
        name: 'Test User',
        email: 'test@example.com',
        timestamp: new Date().toISOString()
      };
      
      const docId = await createDocument('users', 'user123', newData);
      setData({ id: docId, ...newData });
      alert('Document created successfully!');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGet = async () => {
    setLoading(true);
    setError(null);
    try {
      const doc = await getDocument('users', 'user123');
      setData(doc);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    setError(null);
    try {
      const updates = {
        name: 'Updated Name',
        updatedAt: new Date().toISOString()
      };
      
      await updateDocument('users', 'user123', updates);
      setData(prev => ({ ...prev, ...updates }));
      alert('Document updated successfully!');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    try {
      await deleteDocument('users', 'user123');
      setData(null);
      alert('Document deleted successfully!');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleQuery = async () => {
    setLoading(true);
    setError(null);
    try {
      const conditions = [
        { field: 'name', operator: '==', value: 'Test User' }
      ];
      
      const results = await queryDocuments('users', conditions);
      setData(results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 bg-white" id="firestore-example">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Firestore Integration Example</h2>
          <p className="mt-4 text-xl text-gray-600">Test the Firestore CRUD operations below</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            onClick={handleCreate} 
            disabled={loading}
            className="btn-primary disabled:opacity-50"
          >
            Create Document
          </button>
          <button 
            onClick={handleGet} 
            disabled={loading}
            className="btn-primary disabled:opacity-50"
          >
            Get Document
          </button>
          <button 
            onClick={handleUpdate} 
            disabled={loading}
            className="btn-primary disabled:opacity-50"
          >
            Update Document
          </button>
          <button 
            onClick={handleDelete} 
            disabled={loading}
            className="btn-primary disabled:opacity-50"
          >
            Delete Document
          </button>
          <button 
            onClick={handleQuery} 
            disabled={loading}
            className="btn-primary disabled:opacity-50"
          >
            Query Documents
          </button>
        </div>

        {loading && (
          <div className="text-center text-gray-600">
            Loading...
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 mb-4">
            Error: {error}
          </div>
        )}

        {data && (
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-2">Document Data:</h3>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-auto max-h-96">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
