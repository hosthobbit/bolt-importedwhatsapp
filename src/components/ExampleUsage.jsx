import React, { useState, useEffect } from 'react';
import { 
  createDocument, 
  getDocument, 
  updateDocument, 
  deleteDocument, 
  queryDocuments 
} from '../utils/firestore';

export default function ExampleUsage() {
  const [data, setData] = useState(null);

  // Example: Create a new document
  const handleCreate = async () => {
    try {
      const newData = {
        name: 'Test User',
        email: 'test@example.com'
      };
      
      const docId = await createDocument('users', 'user123', newData);
      console.log('Document created with ID:', docId);
    } catch (error) {
      console.error('Error creating document:', error);
    }
  };

  // Example: Get a document
  const handleGet = async () => {
    try {
      const doc = await getDocument('users', 'user123');
      setData(doc);
    } catch (error) {
      console.error('Error getting document:', error);
    }
  };

  // Example: Update a document
  const handleUpdate = async () => {
    try {
      const updates = {
        name: 'Updated Name'
      };
      
      await updateDocument('users', 'user123', updates);
      console.log('Document updated successfully');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  // Example: Delete a document
  const handleDelete = async () => {
    try {
      await deleteDocument('users', 'user123');
      console.log('Document deleted successfully');
      setData(null);
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  // Example: Query documents
  const handleQuery = async () => {
    try {
      const conditions = [
        { field: 'name', operator: '==', value: 'Test User' }
      ];
      
      const results = await queryDocuments('users', conditions);
      console.log('Query results:', results);
    } catch (error) {
      console.error('Error querying documents:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="space-x-4 mb-4">
        <button onClick={handleCreate} className="btn-primary">Create</button>
        <button onClick={handleGet} className="btn-primary">Get</button>
        <button onClick={handleUpdate} className="btn-primary">Update</button>
        <button onClick={handleDelete} className="btn-primary">Delete</button>
        <button onClick={handleQuery} className="btn-primary">Query</button>
      </div>

      {data && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Document Data:</h3>
          <pre className="bg-gray-100 p-4 rounded mt-2">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
