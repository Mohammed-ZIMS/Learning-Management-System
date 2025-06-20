import multer from 'multer';

// Set up Multer storage
const storage = multer.memoryStorage(); // or use diskStorage

const fileFilter = (req, file, cb) => {
  if (!file) {
    return cb(new Error("No file uploaded"), false);
  }
  cb(null, true);
};

const upload = multer({
  dest: 'uploads/', // Directory to save files if using diskStorage
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1000 * 1024 * 1024, // 1 GB limit
  },
});

export default upload;
