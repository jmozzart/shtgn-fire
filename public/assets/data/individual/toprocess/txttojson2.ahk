Sleep 1000
	
Loop Files, *.txt  ; Recurse into subfolders.
{
	FileDelete, %A_LoopFileName%.json.js

	
	Loop, read, %A_LoopFileName%
			
	{
	
			if (A_Index = 1)
		continue
		
		Column1 := StrSplit(A_LoopReadLine, A_Tab).1
		Column2 := StrSplit(A_LoopReadLine, A_Tab).2
		Column3 := StrSplit(A_LoopReadLine, A_Tab).3
		Column4 := StrSplit(A_LoopReadLine, A_Tab).4
		Column5 := StrSplit(A_LoopReadLine, A_Tab).5
		Column6 := StrSplit(A_LoopReadLine, A_Tab).6
		Column7 := StrSplit(A_LoopReadLine, A_Tab).7
		Column8 := StrSplit(A_LoopReadLine, A_Tab).8
		Column9 := StrSplit(A_LoopReadLine, A_Tab).9
		Column10 := StrSplit(A_LoopReadLine, A_Tab).10
		Column11 := StrSplit(A_LoopReadLine, A_Tab).11
		starsloop := % StrRepeat("dqxstar-filleddqx, ", Column5)
		
	;	Fileappend, %Column6%`n%Column7%`n%Column8%`n%Column9%`n%Column10%`n%Column11%`n, veryallreviewphotos.txt
	;	Fileappend, %A_LoopFileName%`n, processedid.txt
		
		FileRead, subjs, objectformat.txt
		
	;	StringReplace, Column4, Column4, ", ', All

		StringReplace, ObjzB, subjs, rplcname, %Column2%, All
		StringReplace, ObjzC, ObjzB, rplcdate, %Column3%, All
		StringReplace, ObjzD, ObjzC, rplctext, %Column4%, All
		StringReplace, ObjzD, ObjzD, rplcrstars, %Column5%, All
		StringReplace, ObjzE, ObjzD, rplcstar1, %starsloop%, All
		StringReplace, ObjzE1, ObjzE, `,%A_Space%], ], All
		StringReplace, ObjzE2, ObjzE1, dqx, ", All
		StringReplace, ObjzF, ObjzE2, rplcurl, %Column6%, All
		if (Column7 = "")
		{
			StringReplace, ObjzG, ObjzF, rplc2url, , All
		}else {
		StringReplace, ObjzG, ObjzF, rplc2url, `,%A_Space%"%Column7%", All
		}
		if (Column8 = "")
		{
			StringReplace, ObjzH, ObjzG, rplc3url, , All
		}else {
			StringReplace, ObjzH, ObjzG, rplc3url, `,%A_Space%"%Column8%", All
		}
		if (Column9 = "")
		{
			StringReplace, ObjzI, ObjzH, rplc4url, , All
		}else {
			StringReplace, ObjzI, ObjzH, rplc4url, `,%A_Space%"%Column9%", All
		}
		if (Column10 = "")
		{
			StringReplace, ObjzJ, ObjzI, rplc5url, , All
		}else {
			StringReplace, ObjzJ, ObjzI, rplc5url, `,%A_Space%"%Column10%", All
		}
	if (Column11 = "")
		{
			StringReplace, ObjzK, ObjzJ, rplc6url, , All
		}else {
			StringReplace, ObjzK, ObjzJ, rplc6url, `,%A_Space%"%Column11%", All
		}					

	
		Fileappend, %ObjzK%`n, summary.txt
		Sleep 500

	}
	FileRead, mainjs, reviewjsontemplate.txt
	FileRead, subjs, summary.txt
	Sleep 500
	
	StringTrimRight, subjs, subjs, 2
	StringReplace, newvar, mainjs, replacedata, %subjs%, All		
	
	Fileappend, %newvar%, %A_LoopFileName%.json.js
	
	Sleep 1000
	FileDelete, summary.txt
	
}


Sleep 500


MsgBox, Done
return


StrRepeat(string, times)
{
    loop % times
        output .= string
    return output
}
