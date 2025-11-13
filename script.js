// Initialize Firebase (to be configured by user)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Google Sign-In Functionality
function handleGoogleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // Check if user is approved by admin
            checkUserApprovalStatus(result.user.uid);
        })
        .catch((error) => {
            console.error('Sign in error:', error);
            alert('Sign in failed. Please try again.');
        });
}

function checkUserApprovalStatus(userId) {
    // In a real app, this would check Firestore or your backend
    // For demo, we'll simulate a pending state
    alert('Your account is pending admin approval. You will receive an email when approved.');
    firebase.auth().signOut();
}

// File Upload Handling
function setupFileUpload() {
    const fileInputs = document.querySelectorAll('.file-upload-input');
    
    fileInputs.forEach(input => {
        const dropZone = input.closest('.file-upload');
        
        // Highlight drop zone when dragging over
        ['dragenter', 'dragover'].forEach(eventName => {
            dropZone.addEventListener(eventName, (e) => {
                e.preventDefault();
                dropZone.classList.add('dragging');
            });
        });
        
        // Remove highlight when leaving
        ['dragleave', 'dragend'].forEach(eventName => {
            dropZone.addEventListener(eventName, () => {
                dropZone.classList.remove('dragging');
            });
        });
        
        // Handle file drop
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragging');
            input.files = e.dataTransfer.files;
            updateFileList(input);
        });
        
        // Handle manual file selection
        input.addEventListener('change', () => {
            updateFileList(input);
        });
    });
}

function updateFileList(input) {
    const fileListElement = input.nextElementSibling;
    const files = Array.from(input.files);
    
    if (files.length === 0) {
        fileListElement.innerHTML = '<span class="text-gray-500">No files selected</span>';
        return;
    }
    
    fileListElement.innerHTML = files.map(file => `
        <div class="flex items-center justify-between py-2 px-3 bg-gray-50 rounded mb-2">
            <div class="flex items-center">
                <i data-feather="${getFileIcon(file)}" class="w-4 h-4 mr-2"></i>
                <span class="text-sm truncate max-w-xs">${file.name}</span>
            </div>
            <span class="text-xs text-gray-500">${formatFileSize(file.size)}</span>
        </div>
    `).join('');
    
    feather.replace();
}

function getFileIcon(file) {
    if (file.type.includes('image')) return 'image';
    if (file.type.includes('pdf')) return 'file-text';
    if (file.name.endsWith('.stl')) return 'box';
    return 'file';
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    setupFileUpload();
    
    // Initialize date pickers
    flatpickr('.date-picker', {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today"
    });
});