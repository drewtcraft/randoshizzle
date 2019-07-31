atom.commands.add 'atom-workspace', 'editor:insert-console-log', ->
	consonants = 'BCDFGHJKLMNPQRSTVWXZ';
	vowels = 'AEIOUY';
	editor = atom.workspace.getActiveTextEditor();
	text = editor.getSelectedText()
	if text is ""
		toPrint = '';
		toPrint += consonants[Math.round(Math.random() * (consonants.length - 1))];
		toPrint += vowels[Math.round(Math.random() * (vowels.length - 1))];
		toPrint += consonants[Math.round(Math.random() * (consonants.length - 1))];
		toPrint += vowels[Math.round(Math.random() * (vowels.length - 1))];
		toPrint += consonants[Math.round(Math.random() * (consonants.length - 1))];
		toPrint += vowels[Math.round(Math.random() * (vowels.length - 1))];
		toPrint += consonants[Math.round(Math.random() * (consonants.length - 1))];
		toPrint += vowels[Math.round(Math.random() * (vowels.length - 1))];
		toPrint += consonants[Math.round(Math.random() * (consonants.length - 1))];
		editor.insertText("console.log('#{toPrint}')");
	else
		editor.moveToEndOfLine();
		editor.insertNewlineBelow();
		editor.insertText("console.log(`#{text}`, #{text})");

atom.commands.add 'atom-workspace', 'editor:json-stringify', ->
	editor = atom.workspace.getActiveTextEditor();
	text = editor.getSelectedText()
	editor.insertText("JSON.stringify(#{text})");
