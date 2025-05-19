const { ipcRenderer } = require('electron');
const marked = require('marked');

const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const saveBtn = document.getElementById('saveBtn');
const previewBtn = document.getElementById('previewBtn');

saveBtn.addEventListener('click', async () => {
  const content = editor.value;
  const result = await ipcRenderer.invoke('save-note', content);
  if (result === 'success') alert('Nota salva com sucesso!');
});

previewBtn.addEventListener('click', () => {
  preview.innerHTML = marked.parse(editor.value);
  preview.classList.toggle('hidden');
});
