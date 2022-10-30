import mongoose from "mongoose";

const NotesUploadSchema = new mongoose.Schema({
    UserID: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    uploadFile: {
        type: String,
        require: true
    },

});


export default mongoose.model("NoteUpload", NotesUploadSchema);