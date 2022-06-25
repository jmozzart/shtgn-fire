Sleep 1000

Loop, Files, *.txt
{
	StringReplace, NewFile, A_LoopFileName, .txt, .js
	FileMove, %A_LoopFileName%, %NewFile%
}
MsgBox, Complete

Sleep 500


MsgBox, Done
return
