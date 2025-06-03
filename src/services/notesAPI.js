import axios from 'axios'

const API_URL = "https://buacvbbivflbymzfocpa.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1YWN2YmJpdmZsYnltemZvY3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MzExNjAsImV4cCI6MjA2NDUwNzE2MH0.k4VdXx-0WMk_LiwY7ha89I4i9r52tonvROOvlXJZkgY"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}