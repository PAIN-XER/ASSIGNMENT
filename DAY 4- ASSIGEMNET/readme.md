# ASSIGEMENT DAY 4

## Q1: How to give an example date range picker in React js?

```javascript
const DateRangePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <DateRangePicker
      ranges={[{ startDate, endDate, key: 'selection' }]}
      onChange={handleSelect}
    />
  );
};

function App() {
  return (
    <div>
      <DateRangePickerComponent />
    </div>
  );
}
```


## Q2: How to MP3 file in React js?

```javascript
import React from 'react';
import Sound from 'react-sound';

const AudioPlayer = () => {
  return (
    <div>
      <Sound
        url="path/to/audio.mp3"
        playStatus={Sound.status.PLAYING}
      />
    </div>
  );
};

export default AudioPlayer;
```

```bash
npm install react-audio-player
```

```javascript
import React from 'react';
import AudioPlayer from 'react-audio-player';

const AudioPlayerComponent = () => {
  return (
    <div>
      <AudioPlayer
        src="path/to/audio.mp3"
        controls
      />
    </div>
  );
};

export default AudioPlayerComponent;
```

```javascript
import React from 'react';

const AudioPlayer = () => {
  return (
    <div>
      <audio src="path/to/audio.mp3" controls />
    </div>
  );
};

export default AudioPlayer;
```

```bash
npm install react-sound
```

## Q4:How to generate a QR Code Scanner using React Js?

```javascript
const QrScannerComponent = () => {
  const [result, setResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setResult(data.text);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: 240, height: 240 }}
      />
      {result && (
        <p>
          QR Code Data: <code>{result}</code>
        </p>
      )}
    </div>
  );
};

export default QrScannerComponent;
```
```javascript
function App() {
  return (
    <div>
      <QrScannerComponent />
    </div>
  );
}

export default App;
```

```text
QR Code Data: https://example.com
```

