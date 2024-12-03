import React, { useState } from 'react';

const ImageGeneration = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateImage = async () => {
    setLoading(true);
    setError(null);

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZTgxMmQ1ZGItNjhiNy00NGE5LWJiMTEtZmNiZjdlYTU5OTUyIiwidHlwZSI6ImFwaV90b2tlbiJ9.uc8rusqNduVaRbWEd-0Gs431wXQ75Asb_Zvh1BFIcik'
        },
        body: JSON.stringify({
          response_as_dict: true,
          attributes_as_list: false,
          show_base_64: true,
          show_original_response: false,
          num_images: 1,
          text: 'abstract',
          providers: ['amazon'],
          resolution: '512x512'
        })
      };
    try {
        const response = await fetch('https://api.edenai.run/v2/image/generation', options);
        const data = await response.json();
    
        if (data.amazon && data.amazon.status === "success" && data.amazon.items[0].image_resource_url) {
          setImageUrl(data.amazon.items[0].image_resource_url);
      }
    } catch (err) {
      setError('Error generating image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ImageGeneration">
      <h1></h1>
  
      {!imageUrl && (
        <button onClick={generateImage} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Album Cover'}
        </button>
      )}
  
      {loading && <div></div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
  
      {imageUrl && (
        <div>
          <img
            src={imageUrl}
            alt="Generated Visual"
            style={{ width: '15rem', height: '15rem', borderRadius: '2rem' }}
          />
        </div>
      )}
    </div>
  );
  
};

export default ImageGeneration;
