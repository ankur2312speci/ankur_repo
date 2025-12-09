@echo off
echo ========================================
echo   Stopping DigitalEdge Server
echo ========================================
echo.

for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING') do (
    echo Stopping process %%a...
    taskkill /F /PID %%a >nul 2>&1
)

echo.
echo Server stopped!
echo.
pause

