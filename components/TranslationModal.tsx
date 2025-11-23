import React, { useEffect, useState } from 'react';
import { X, Loader2, Globe } from 'lucide-react';
import { translateText } from '../services/geminiService';

interface TranslationModalProps {
  text: string;
  onClose: () => void;
}

const TranslationModal: React.FC<TranslationModalProps> = ({ text, onClose }) => {
  const [translation, setTranslation] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTranslation = async () => {
      setLoading(true);
      const result = await translateText(text);
      setTranslation(result);
      setLoading(false);
    };
    fetchTranslation();
  }, [text]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-2 mb-4 text-kuwait-green">
          <Globe size={24} />
          <h3 className="text-lg font-bold">Instant Translation</h3>
        </div>

        <div className="mb-4">
          <h4 className="text-sm text-gray-500 mb-1">Original Text:</h4>
          <p className="text-gray-800 font-medium p-3 bg-gray-50 rounded border-l-4 border-blue-500">
            {text}
          </p>
        </div>

        <div>
          <h4 className="text-sm text-gray-500 mb-1">Arabic Translation:</h4>
          {loading ? (
            <div className="flex items-center justify-center p-4">
              <Loader2 className="animate-spin text-kuwait-green" size={32} />
            </div>
          ) : (
            <p className="text-xl font-arabic text-right p-3 bg-green-50 rounded border-r-4 border-kuwait-green leading-loose">
              {translation}
            </p>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-gray-800 font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslationModal;