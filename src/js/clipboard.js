export const copyToClipboard = $('#copyBtn').on( "click", function( event ) {
    event.preventDefault();
    let outputText = $('#hash-output').val();
    try {
        navigator.clipboard.writeText(outputText);
        console.log('Content copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
});