import { useEffect, useRef, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';

const useQrCode = () => {
  const [options, setOptions] = useState({
    width: 300,
    height: 300,
    type: 'svg',
    data: 'https://google.com',
    image: null,
    margin: 10,
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'Q',
    },
    imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 20, crossOrigin: 'anonymous' },
    dotsOptions: {
      color: '#222222',
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 0,
      //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
      // },
      type: 'rounded',
    },
    backgroundOptions: {
      color: '#5FD4F3',
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 0,
      //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
      // },
    },
    cornersSquareOptions: {
      color: '#222222',
      type: 'extra-rounded',
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 180,
      //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
      // },
    },
    cornersDotOptions: {
      color: '#222222',
      type: 'dot',
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 180,
      //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
      // },
    },
  });
  const [fileExt, setFileExt] = useState('svg');
  const [qrCode] = useState(new QRCodeStyling(options));
  const contentRef = useRef(null);

  const onDataChange = event => {
    setOptions(opt => ({
      ...opt,
      data: event.target.value,
    }));
  };

  const onExtensionChange = event => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode
      .download({
        extension: fileExt,
      })
      .then(() => {});
  };

  useEffect(() => {
    if (contentRef.current) {
      qrCode.append(contentRef.current);
    }
  }, [qrCode, contentRef]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode.update(options);
  }, [qrCode, options]);

  return {
    options,
    contentRef,
    onDataChange,
    onExtensionChange,
    onDownloadClick,
  };
};

export default useQrCode;
