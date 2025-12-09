@echo off
echo ========================================
echo   DigitalEdge Website - Starting Server
echo ========================================
echo.
echo Checking dependencies...

if not exist "node_modules\dotenv" (
    echo Installing dependencies...
    call npm install
    echo.
    echo Dependencies installed!
    echo.
) else (
    echo Dependencies already installed.
    echo.
)

echo Checking if port 3000 is available...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING') do (
    echo.
    echo ⚠️  Port 3000 is already in use!
    echo.
    echo The server might already be running.
    echo Visit: http://localhost:3000
    echo.
    echo To stop it, run: STOP_SERVER.bat
    echo Or press Ctrl+C and run this script again.
    echo.
    pause
    exit /b
)

echo Port 3000 is available.
echo.
echo Starting server...
echo.
echo ========================================
echo   Server will be available at:
echo   http://localhost:3000
echo ========================================
echo.
echo Press Ctrl+C to stop the server
echo.
node server.js
pause

