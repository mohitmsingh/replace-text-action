const fs = require('fs');
const core = require('@actions/core');

try {
    const originalText = core.getInput('OriginalText');
    const replaceText = core.getInput('ReplaceText');
    const filePath = core.getInput('FilePath');

    // Read the file
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Replace text
    const updatedContent = fileContent.replace(new RegExp(originalText, 'g'), replaceText);

    // Write back to the file
    fs.writeFileSync(filePath, updatedContent);

    core.setOutput('Result', `Text replaced successfully in ${filePath}`);
} catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
}
