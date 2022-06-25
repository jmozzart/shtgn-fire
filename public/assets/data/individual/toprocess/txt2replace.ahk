Sleep 1000
MsgBox, running now
	
Loop Files, *.txt
{

	FileRead, torep, %A_LoopFileName%
	
	StringReplace, stringrep, torep, .jpg_128x128.jpg_.webp, , All
	StringReplace, stringrep, stringrep, .jpg_128x128.jpg_.webp, , All
	StringReplace, stringrep, stringrep, https://cf.shopee.ph/file/, , All
	StringReplace, stringrep, stringrep, https://lzd-social-img.oss-ap-southeast-1.aliyuncs.com/, , All
	StringReplace, stringrep, stringrep, https://lzd-u.slatic.net/, , All
	StringReplace, stringrep, stringrep, https://sg-test-11.slatic.net/other/roc/, , All
	StringReplace, stringrep, stringrep, https://ph-live-02.slatic.net/p/, , All
	StringReplace, stringrep, stringrep, .png, , All
	StringReplace, stringrep, stringrep, .jpg, , All
	;StringReplace, stringrep, stringrep, ", ', All
		Sleep 500
	FileDelete %A_LoopFileName%
	Sleep 500
		Fileappend, %stringrep%, rvwp.%A_LoopFileName%
		Sleep 500


	
	
}


Sleep 500


MsgBox, Done
return
