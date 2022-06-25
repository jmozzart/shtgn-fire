Sleep 1000

Loop, Files, *.txt.html	
{
	StringReplace, NewFile, A_LoopFileName, .txt.html, .html, ALL
	FileMove, %A_LoopFileName%, %NewFile%
}
MsgBox, Complete

Sleep 500


MsgBox, Done
return
