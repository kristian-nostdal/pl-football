@ECHO OFF 
setlocal EnableDelayedExpansion
TITLE Premier league watcher
ECHO Starting football generator..

::List of current PL teams
set PL-List="Che:  Chelsea" "Manc: Manchester City" "Liv:  Liverpool" "Wes:  West Ham United" "Ars:  Arsenal" "Manu: Manchester United" "Wol:  Wolverhampton Wanderers" "Tot:  Tottenham Hotspur" "Bri:  Brighton Hove Albion" "Lei:  Leicester City" "Cry:  Crystal Palace" "Bre:  Brentford" "Ast:  Aston Villa" "Eve:  Everton" "Sou:  Southampton" "Wat:  Watford" "Lee:  Leeds United" "Bur:  Burnley" "Nor:  Norwich City" "New:  Newcastle United"

::HTML array of PL teams (can be combined with list over, just to lazy)
set array[Che]=chelsea
set array[Manc]=manchester-city
set array[Liv]=liverpool
set array[Wes]=west-ham-united
set array[Ars]=arsenal
set array[Manu]=manchester-united
set array[Wol]=wolverhampton-wanderers
set array[Tot]=tottenham-hotspur
set array[Bri]=brighton-hove-albion
set array[Lei]=leicester-city
set array[Cry]=crystal-palace
set array[Bre]=brentford
set array[Ast]=aston-villa
set array[Eve]=everton
set array[Sou]=southampton
set array[Wat]=watford
set array[Lee]=leeds-united
set array[Bur]=burnley
set array[Nor]=norwich-city
set array[New]=newcastle-united

:: Print out all teams
ECHO ==========================
ECHO Watch any Premier League matche online.
ECHO ============================
for %%a in (%PL-List%) do echo %%~a
ECHO ============================
ECHO Enter the short-name: (eg. "Liv")
ECHO ============================

:: Get the home team
:homewhile
set /p home=Home team: 
IF [!array[%home%]!] == [] GOTO homewhile
set linkhome=!array[%home%]!

:: Get the away team
:awaywhile
set /p away=Away team: 
IF [!array[%away%]!] == [] GOTO awaywhile
set linkaway=!array[%away%]!

:: Start the match. "START" is default browser
START http://weakstreams.com/soccer-streams/premier-league/%linkhome%-vs-%linkaway%

ECHO Redirecting you to stream. Enjoy the match!
timeout 3 > NUL
ECHO Thats it - Bye!
timeout 1 > NUL
:End